

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button style={{ color: 'green'  }} onClick={onClick}>{children}</button>
  );
}