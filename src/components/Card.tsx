interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return <div className="bg-white p-5 border border-gray-200 rounded-lg shadow">{children}</div>;
}
