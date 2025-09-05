import React from "react";

const UpdateGiyarbiSharifBalance = () => {
  return (
    <div>
      <h2>Update Giyarbi Sharif Balance</h2>
      <form>
        <label>
          New Balance:
          <input type="number" name="balance" />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateGiyarbiSharifBalance;
