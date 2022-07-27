import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utility/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <section>
      <h2 className="categories">Categories</h2>

      {categories.map(({ slug }) => {
        return (
          <div className="slug" key={slug}>
            <h3>
              <Link to={`/categories/${slug}`}>{slug}</Link>
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
