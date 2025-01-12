import { CardProps } from "@/utils/interfaces/dataHandling"
  
  const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
      <div className={`card-container ${className}`}>
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{children}</div>
      </div>
    );
  };
  
  export default Card;
  