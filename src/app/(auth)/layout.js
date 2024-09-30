import NavBar from "@/components/NavBar";

export default function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
