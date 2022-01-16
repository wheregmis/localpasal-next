import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { storage } from "../firebase";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import axios from "axios";
import { LOCALPASAL_BACKEND_BASE_URL } from "helpers/backend_helper";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);




  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // 1. create a post and add to firestore 'post collection'
    // 2. get the post id for newly created post

    const body = {
      "productTitle": titleRef.current.value,
      "productPrice": priceRef.current.value,
      "productCategory": "unknown",
      "productSubCategory": "unknown",
      "productDescription": descriptionRef.current.value,
      "productImage": "",
      "sellerUid": session.user?.uid,
      "timestamp": Date.now()
        }

    console.log(body)

    const response = await axios.post(`${LOCALPASAL_BACKEND_BASE_URL}/product/`, body, {
          headers: {
            "Authorization": `Bearer ${session.access_token}`,
          },
        })
        .then(function (response) {
          console.log(response);
          console.log("New document added in the mongodb", response.data);

          // 3. upload the image to firebase storage with post id
          const imageRef = ref(storage, `products/${response.data._id}/image`);

          uploadString(imageRef, selectedFile, "data_url").then(
            async (snapshot) => {
              // 4. get a download url from firebase storage and update to firebase original post collection
              const downloadURL =  await getDownloadURL(imageRef);
              console.log('Image Uploaded Successfully')
              console.log("Now need to update product with image")
              // await updateDoc(doc(db, "products", docRef.id), { image: downloadURL });

              const product = {
                "productTitle": response.data.productTitle,
                "productPrice": response.data.productPrice,
                "productCategory": "unknown",
                "productSubCategory": "unknown",
                "productDescription": response.data.productDescription,
                "productImage": downloadURL,
                "sellerUid": session.user?.uid,
                "timestamp": response.data.timestamp
              }

               axios.put(`${LOCALPASAL_BACKEND_BASE_URL}/product/${response.data._id}`, product, {
                headers: {
                  "Authorization": `Bearer ${session.access_token}`,
                },
              })
            }
    );
        })
        .catch(function (error) {
          console.log(error);
        });

    

    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    // Transition root is a transition object given by headless ui
    // Dialogue is also the same
    // as will render the dialogue as div or Fragment
    // onCLose function will give us access to click clicked outside the modal
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overscroll-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center mih-h-[800px] sm:min-h-screen pt-4 px-4 
        pb-20 text-center sm:block sm:p-0"
        >
          {/* //* Transition child is reponsible to pop and drift the child element */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* this is responsible for the overlay to appear*/}
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></Dialog.Overlay>
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal components */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203
          </span>

          {/* Another Transition child */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 
              text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle
              sm:max-w-sm sm:w-full sm:p-6"
            >
              <div>
                {selectedFile ? (
                  <img
                    className="w-full object-contain cursor-pointer"
                    src={selectedFile}
                    onClick={() => setSelectedFile(null)}
                  ></img>
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                  >
                    <CameraIcon className="h-6 w-6 text-red-600"></CameraIcon>
                  </div>
                )}

                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div>
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="border-none focus:ring-0 w-full text-center"
                      type="text"
                      ref={titleRef}
                      placeholder="Product / Service Name"
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="border-none focus:ring-0 w-full text-center"
                      type="text"
                      ref={priceRef}
                      placeholder="Price"
                    ></input>
                  </div>
                  <div className="mt-2">
                    <textarea
                      className="border-b focus:ring-0 w-full"
                      type="textarea"
                      ref={descriptionRef}
                      rows={5}
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="button"
                disabled={!selectedFile}
                className="inline-flex justify-center w-full rounded-md border border-transparent 
                  shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm 
                  disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300
                  "
                onClick={uploadPost}
              >
                {loading ? "Uploading..." : "Upload Post"}
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
