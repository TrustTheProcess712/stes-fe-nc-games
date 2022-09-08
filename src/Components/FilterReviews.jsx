const FilterReviews = ({ setSortBy, setOrder }) => {
  return (
    <section className="sort_by">
      <h4 className="sort_by_label">Sort Reviews</h4>
      <select
        name="sort_by"
        id=""
        className="sort_by"
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="title">Title</option>
        <option value="designer">Designer</option>
        <option value="votes">Votes</option>
        <option value="created_at">Date posted</option>
      </select>

      <select
        name="order"
        id=""
        className="sort_by_order"
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
  );
};

export default FilterReviews;
