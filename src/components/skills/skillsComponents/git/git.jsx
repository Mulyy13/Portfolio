import git from "../../../../assets/svgs/git.svg";

const Git = () => {
  return (
    <div className="skills__item skills__item-git ">
      <div className="skills__item-image">
        <img src={git} alt="git" />
      </div>
      <p className="skills__item-name">Git</p>
    </div>
  );
};

export default Git;
