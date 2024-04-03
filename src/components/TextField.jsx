/* eslint-disable react/prop-types */

const TextField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  coustmStyle,
  coustmStylabel,
  required
}) => {
  return (
    <div className={ `${coustmStylabel} `}>
      <label
        htmlFor=""
        className={`text-sm font-medium text-gray-900 ${coustmStylabel} `}
      >
        {labelName}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        className={` bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg
        focus:ring-[#4649ff] focus:border-[#4649ff] outline-none
          w-full p-3 ${coustmStyle}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
