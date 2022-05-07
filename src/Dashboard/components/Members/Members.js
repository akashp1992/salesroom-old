import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Avatar from "react-avatar";
import AddMemberModal from "./MembersModal/AddMemberModal";
import { useGetAllUsersQuery, useUpdateUserMutation } from "../../../store/services/userServices/userServices";
const Members = () => {
  const [addMember, setAddMember] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updateUser, result] = useUpdateUserMutation()
  const handleAddMember = () => {
    setAddMember(true);
    setShowModal(true);
  };
  //Fetch the user from Api
  const businessId = "43652f2d-7324-43be-bd81-34f2af6e34a6"
  const allUserByProductId = useGetAllUsersQuery({
    businessId
  });


  useEffect(() => {
    allUserByProductId.refetch();
  }, [allUserByProductId?.data]);

  //Change Role When Select Dropdown Value
  let [role, setRole] = useState("Select Role")
  const handleChangeRole = (e, email, userId) => {
    setRole(e.target.value)
    updateUser({
      role: e.target.value.toUpperCase(),
      email, userId
    })
  }

  return (
    <>
      <Breadcrumb />
      <div className="p-6 mb-3 font-poppins">
        <div className="mb-6 w-4/5">
          <h2 className="text-[40px] font-bold mb-4 font-poppins ">Members</h2>
          <p className="text-fontColor text-lg font-normal">
            Manage members here, or set up a domain, so everyone with allowed
            email domains can join the workspace automatically. <br />
            Note: you will NOT be charged for each member added.
          </p>
          <button
            className="modal-cancle-btn !font-semibold !rounded-none capitalize mb-7"
            onClick={handleAddMember}
          >
            Add members
          </button>
          {/* members table */}
          <div className="overflow-y-auto h-[320px] w-full border-2 border-gray-300">
            <div className="flex items-center justify-around border-b-2 border-gray-300 sticky z-10 top-0 bg-whte py-2 bg-white">
              <h2 className="text-primary mb-0 basis-1/2 ml-10 text-xl">
                User
              </h2>
              <h2 className="text-primary mb-0 basis-1/2 text-center text-xl">
                Access level
              </h2>
            </div>

            {/* user */}
            {console.log(allUserByProductId?.data?.users)}
            {allUserByProductId?.data?.users?.map((users) => (
              <div key={users.businessId} className="flex items-center justify-around my-5 mx-3">
                <div className="basis-1/2">
                  <div className="flex items-center gap-2">
                    <Avatar name={users.fullName} size="40" round={true} />
                    <div className="flex flex-col">
                      <h2 className="text-xl mb-0">{users.fullName}</h2>
                      <p className="text-[14px] text-fontColor mb-0 -mt-2">
                        {users.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 text-center">
                  <select class="w-[9rem] mx-auto text-xl" onChange={(e) => handleChangeRole(e, users.email, users.userId)}>
                    <option value="Admin" className="text-lg" selected>
                      Admin
                    </option>
                    <option value="User" className="text-lg">
                      Member
                    </option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Invite link</h3>
          <p className="text-fontColor text-lg font-normal">
            Share this secret link to invite people to this workspace. Only
            admins can see this. You can reset the link for all space members to
            generate a new invite link.
          </p>
          <div className="flex">
            <input type="text" className="border-2 border-gray-300 w-2/3" />
            <button className="modal-cancle-btn !font-semibold !rounded-none capitalize mb-7">
              Copy Link
            </button>
          </div>
        </div>
      </div>
      {addMember && (
        <AddMemberModal
          showModal={showModal}
          setAddMember={setAddMember}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Members;



//   {/* user */}
//   <div className="flex items-center justify-around my-5 mx-3">
//   <div className="basis-1/2">
//     <div className="flex items-center gap-2">
//       <Avatar name="Niranjan IN" size="40" round={true} />
//       <div className="flex flex-col">
//         <h2 className="text-xl mb-0">Niranjan I N</h2>
//         <p className="text-[14px] text-fontColor mb-0 -mt-2">
//           nirangan@aplos.in
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="basis-1/2 text-center">
//     <select class="w-[9rem] mx-auto text-xl">
//       <option value="1" className="text-lg" selected>
//         Admin
//       </option>
//       <option value="2" className="text-lg">
//         Member
//       </option>
//     </select>
//   </div>
// </div>
// {/* user */}
// <div className="flex items-center justify-around my-5 mx-3">
//   <div className="basis-1/2">
//     <div className="flex items-center gap-2">
//       <Avatar name="Niranjan IN" size="40" round={true} />
//       <div className="flex flex-col">
//         <h2 className="text-xl mb-0">Niranjan I N</h2>
//         <p className="text-[14px] text-fontColor mb-0 -mt-2">
//           nirangan@aplos.in
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="basis-1/2 text-center">
//     <select class="w-[9rem] mx-auto text-xl">
//       <option value="1" className="text-lg" selected>
//         Admin
//       </option>
//       <option value="2" className="text-lg">
//         Member
//       </option>
//     </select>
//   </div>
// </div>
// {/* user */}
// <div className="flex items-center justify-around my-5 mx-3">
//   <div className="basis-1/2">
//     <div className="flex items-center gap-2">
//       <Avatar name="Niranjan IN" size="40" round={true} />
//       <div className="flex flex-col">
//         <h2 className="text-xl mb-0">Niranjan I N</h2>
//         <p className="text-[14px] text-fontColor mb-0 -mt-2">
//           nirangan@aplos.in
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="basis-1/2 text-center">
//     <select class="w-[9rem] mx-auto text-xl">
//       <option value="1" className="text-lg" selected>
//         Admin
//       </option>
//       <option value="2" className="text-lg">
//         Member
//       </option>
//     </select>
//   </div>
// </div>
// {/* user */}
// <div className="flex items-center justify-around my-5 mx-3">
//   <div className="basis-1/2">
//     <div className="flex items-center gap-2">
//       <Avatar name="Niranjan IN" size="40" round={true} />
//       <div className="flex flex-col">
//         <h2 className="text-xl mb-0">Niranjan I N</h2>
//         <p className="text-[14px] text-fontColor mb-0 -mt-2">
//           nirangan@aplos.in
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="basis-1/2 text-center">
//     <select class="w-[9rem] mx-auto text-xl">
//       <option value="1" className="text-lg" selected>
//         Admin
//       </option>
//       <option value="2" className="text-lg">
//         Member
//       </option>
//     </select>
//   </div>
// </div>