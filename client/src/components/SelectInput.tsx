const SelectInput = ({
  onChange,
  name,
  data,
  defaultValue,
}: {
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  data: SelectInput;
  defaultValue: string;
}) => {
  return (
    <select
      onChange={onChange}
      name={name}
      className="text-slate-700 font-semibold focus:outline-none border border-gray-300 text-sm rounded-[10rem]
        focus:border-amber-500 px-4 py-2 w-full"
      defaultValue={defaultValue}
    >
      {data.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        );
      })}
    </select>
  );
};
export default SelectInput;
