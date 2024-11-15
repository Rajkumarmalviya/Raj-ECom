export default function NewArrivalsSize() {
  return (
    <div className="new-arrivals-availability-main-div">
      <div>
        <input type="checkbox" id="filter-size-1" />
        <label htmlFor="filter-size-1">
          <span className="filter-count">S &#40;20&#41;</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="filter-size-2" />
        <label htmlFor="filter-size-2">
          <span className="filter-count">M &#40;20&#41;</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="filter-size-3" />
        <label htmlFor="filter-size-3">
          <span className="filter-count">L &#40;20&#41;</span>
        </label>
      </div>
    </div>
  );
}
