interface PaginatorProps {
  page: number;
  onChange: (page: number) => void;
}

export const Paginator = ({ page, onChange }: PaginatorProps) => {
  return (
    <div className="text-center text-white">
      <button
        className="p-3"
        onClick={() => {
          onChange(page <= 0 ? 0 : page - 1);
        }}
      >
        &lt;
      </button>
      <input
        className="text-black text-center w-10"
        type="number"
        onChange={(e) => onChange(parseInt(e.target.value))}
        value={page}
      />
      <button
        className="p-3"
        onClick={() => {
          onChange(page + 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginator;
