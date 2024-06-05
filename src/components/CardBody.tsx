interface Props {
  children: React.ReactNode;
}

export default function CardBody({ children }: Props) {
  return <div className="mt-5">{children}</div>;
}
