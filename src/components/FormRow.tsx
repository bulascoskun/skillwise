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
        className="rounded border p-4 focus:outline-none"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
