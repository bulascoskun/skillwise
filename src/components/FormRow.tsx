const FormRow = ({ type, name, labelText, defaultValue, onChange }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="rounded border py-2 px-4 focus:outline-none focus:border-amber-500 transition"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
