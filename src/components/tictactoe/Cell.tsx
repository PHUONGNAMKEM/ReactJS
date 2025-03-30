interface CellAtributes {
  value?: string | null;
  onClick?: () => void;
  className: string;
}

function Cell({ value, onClick, className }: CellAtributes) {
  //   const { value, onClick } = props;
  //   console.log(props);
  //   console.log(">>> check value: ", value);
  //   console.log(">>> check onclick: ", onClick);

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
}

export default Cell;
