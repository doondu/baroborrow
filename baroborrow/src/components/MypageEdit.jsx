import React, { useState } from "react";

export default function MypageEdit({
  currentNickname,
  currentProfileImage,
  onEdit,
  onCancel,
}) {
  const [newNickname, setNewNickname] = useState(currentNickname);
  const [newProfileImage, setNewProfileImage] = useState(currentProfileImage);

  const handleProfileImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProfileImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleEditSubmit = () => {
    onEdit({
      nickname: newNickname,
      profileImage: newProfileImage,
    });
  };

  return (
    <div className="nickname-edit-page">
      <h2>프로필 수정</h2>
      <img src={newProfileImage} alt="프로필 사진" className="profile-image" />
      <input type="file" onChange={handleProfileImageChange} />
      <input
        type="text"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
        placeholder="닉네임"
      />
      <button onClick={handleEditSubmit}>저장</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
}
