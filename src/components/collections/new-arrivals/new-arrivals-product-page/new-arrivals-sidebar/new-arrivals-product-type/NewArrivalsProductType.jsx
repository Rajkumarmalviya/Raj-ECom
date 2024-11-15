export default function NewArrivalsProductType() {
  return (
    <div className="new-arrivals-availability-main-div">
      <div>
        <input type="checkbox" id="filter-type-1" />
        <label htmlFor="filter-type-1">
          <span className="filter-count">Dress &#40;20&#41;</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="filter-type-2" />
        <label htmlFor="filter-type-2">
          <span className="filter-count">Rompers &#40;20&#41;</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="filter-type-3" />
        <label htmlFor="filter-type-3">
          <span className="filter-count">Tops &#40;20&#41;</span>
        </label>
      </div>
    </div>
  );
}
