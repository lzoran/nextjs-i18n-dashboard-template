interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <div className="w-full lg:w-[calc(100%-15rem)] p-5 lg:p-10 float-right">{children}</div>;
}
