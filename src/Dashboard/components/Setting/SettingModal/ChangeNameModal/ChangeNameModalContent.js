import React, { useContext, useState } from "react";
import settingConext from "../../settingContext/settingContext";
import { useUpdateUserMutation } from '../../../../../store/services/userServices/userServices'
const ChangeNameModalContent = () => {
  const [username, setUsername] = useState("");
  const [updateName, result] = useUpdateUserMutation();
  const { setShowModal, setChangeName } = useContext(settingConext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setChangeName(false);
    updateName({
      userId: "7b354ae5-e57d-434b-8adf-f7b0c5f5fedd",
      fullName: username
    }).then(result=>{
      alert("UserName Change")
    })
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Change Name
            </label>
            <input
              type="text"
              name="newName"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter Name"
              className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
              required
            />
          </div>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-start p-6 rounded-b mb-14">
          <button className="modal-done-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangeNameModalContent;
