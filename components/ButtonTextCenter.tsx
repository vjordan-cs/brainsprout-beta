import Link from "next/link";

interface ButtonTextCenterProps {
  text: string;
  link: string;
  title: string;
}

export default function ButtonTextCenter({
  text,
  link,
  title,
}: ButtonTextCenterProps) {
  return (
    <div className="text-center">
      <div className="mb-4 text-2xl md:text-3xl">{title}</div>
      <div className="border-2 border-slate-500 bg-white rounded-lg h-12 px-2">
        <Link
          href={link}
          className="h-full w-full flex justify-center items-center"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
