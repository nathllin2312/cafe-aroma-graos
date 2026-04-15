import Texto from "./src/components/texto";
import Lista from "./src/components/lista";

export default function Home() {
  return (
    // main serve para organizar um conteudo
    // Conhecido como container
    <main>
     <Texto />
     <Lista />
    </main>
  );
}
