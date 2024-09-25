import os

# Directory base per i componenti
base_dir = "app/components"

# File e componenti da creare
components = {
    "Section1.tsx": """
const Section1 = () => {
  return (
    <section>
      <h2>Section 1</h2>
    </section>
  );
};

export default Section1;
""",
    "Section2Projects.tsx": """
import ProjectsCard from "./ProjectsCard";
import Card from "./Card";

const Section2Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ProjectsCard />
      <Card />
    </section>
  );
};

export default Section2Projects;
""",
    "ProjectsCard.tsx": """
const ProjectsCard = () => {
  return (
    <div className="project-card">
      <h3>Project Title</h3>
    </div>
  );
};

export default ProjectsCard;
""",
    "Card.tsx": """
const Card = () => {
  return (
    <div className="card">
      <h3>Card Title</h3>
    </div>
  );
};

export default Card;
""",
    "Section3Twitter.tsx": """
import TwitterCard from "./TwitterCard";

const Section3Twitter = () => {
  return (
    <section>
      <h2>Twitter</h2>
      <TwitterCard />
    </section>
  );
};

export default Section3Twitter;
""",
    "TwitterCard.tsx": """
const TwitterCard = () => {
  return (
    <div className="twitter-card">
      <p>Latest Tweets</p>
    </div>
  );
};

export default TwitterCard;
""",
    "Section4.tsx": """
import Card from "./Card";

const Section4 = () => {
  return (
    <section>
      <h2>Section 4</h2>
      <Card />
    </section>
  );
};

export default Section4;
"""
}

# Funzione per scrivere il file page.tsx
def write_page_tsx(imports):
    content = f'''
import React from "react";
{imports}
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./homepage.css";
import Hero2 from "./components/Hero2";
import Section1 from "./components/Section1";
import Section2Projects from "./components/Section2Projects";
import Section3Twitter from "./components/Section3Twitter";
import Section4 from "./components/Section4";

export default function Home() {{
  return (
    <React.Fragment>
      <Header />
      <Hero2 />
      <Section1 />
      <Section2Projects />
      <Section3Twitter />
      <Section4 />
      <Navbar />
    </React.Fragment>
  );
}}
'''
    with open("app/page.tsx", "w") as f:
        f.write(content)

# Funzione per creare i componenti
def create_components():
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)

    for file_name, content in components.items():
        file_path = os.path.join(base_dir, file_name)
        with open(file_path, "w") as f:
            f.write(content)

# Aggiungi gli import che desideri
new_imports = '''
import Section1 from "./components/Section1";
import Section2Projects from "./components/Section2Projects";
import Section3Twitter from "./components/Section3Twitter";
import Section4 from "./components/Section4";
'''

# Scrivi il file page.tsx e crea i componenti
write_page_tsx(new_imports)
create_components()

