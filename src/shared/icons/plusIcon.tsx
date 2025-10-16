export const PlusIcon = ({size=24, color="#FFFFFF"}: {size?:number, color?:string}) => {
  return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M19 12L5 12" stroke="#FAFCFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" color={color}/>
      </svg>

  );
};
