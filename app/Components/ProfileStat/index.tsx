import React from "react";
import "./style.scss";

interface Props {
  label: string;
  value: number;
  max: number;
}

const ProfileStat = ({ label, value, max }: Props) => {
  return (
    <div className="stat">
      <span>{label}:</span>
      <progress className="stat__value" value={value} max={max} />
      <span className="stat__value-label">{value}</span>
    </div>
  );
};

export default ProfileStat;
