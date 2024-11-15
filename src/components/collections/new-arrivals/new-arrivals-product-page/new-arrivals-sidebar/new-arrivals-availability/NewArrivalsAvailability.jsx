export default function NewArrivalsAvailability() {
  return (
    <div className="new-arrivals-availability-main-div">
      <div>
        <input type="checkbox" id="filter-availability-1"  />
        <label htmlFor="filter-availability-1">
          In Stock <span className="filter-count">&#40;7&#41;</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="filter-availability-2" disabled />
        <label htmlFor="filter-availability-2">
          Out Of Stock <span className="filter-count">&#40;0&#41;</span>
        </label>
      </div>
    </div>
  );
}
