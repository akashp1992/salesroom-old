import React from "react";
import Swal from "sweetalert2";
const AddMemberModal = ({setAddMember, setShowModal, showModal}) => {
  const handleInvite = () =>{
    setAddMember(false)
    setShowModal(false)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Invite Send Successfully',
      showConfirmButton: false,
      timer: 2000
    })
  }
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <form>
                  {/*body*/}
                  <div className="relative p-6 flex-auto items-center justify-end h-[400px]">
                    <div className="flex items-center justify-center">
                      <input
                        type="text"
                        name="emailId"
                        placeholder="Enter Email id"
                        className="border-2 border-gray-400 text-gray-900 text-sm focus:outline-none block w-[450px] p-2.5 bg-gray-200 text-lg"
                      />
                      <select class="w-[9rem] mx-auto text-xl bg-primary text-white focus:outline-none">
                        <option value="1" className="text-lg" selected>
                          Admin
                        </option>
                        <option value="2" className="text-lg">
                          Member
                        </option>
                      </select>
                    </div>
                    <h3 className="mt-5 text-fontColor text-xl">Type or paste in emails above, seperated by commas.</h3>
                  </div>
                  {/*footer*/}
                  <div className="flex justify-end p-6 rounded-b">
                    <button className="modal-cancle-btn" type="submit"
                    onClick={handleInvite}
                    >
                      Invite
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default AddMemberModal;
