import Texto from "./src/components/texto";
import Lista from "./src/components/lista";
import Tabela from "./src/components/tabela";
import produtos from "@/data/produtos.json";

export default function Home() {
  return (
    // main serve para organizar um conteudo
    // Conhecido como container
    <main>
      <Tabela produtos={produtos} />
      <Texto />
      <Lista />
    </main>
  );
}
