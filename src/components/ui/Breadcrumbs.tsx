import { Link } from "react-router-dom";
import type { BreadcrumbItem } from "../../types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items.length) return null;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item${isLast ? " active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                crumb.label
              ) : (
                <Link to={crumb.url ?? "#"}>{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
