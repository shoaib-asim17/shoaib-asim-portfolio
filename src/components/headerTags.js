import React from "react";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const HeaderTags = () => {
  const tags = [
    {
      icon: <DesktopMacIcon className="text-blue-700" fontSize="small" />,
      name: "Web Developer",
    },
    {
      icon: <CodeIcon className="text-blue-400" fontSize="small" />,
      name: "React Developer",
    },
    {
      icon: <CodeIcon className="text-green-600" fontSize="small" />,
      name: "Node",
    },
    {
      icon: <TerminalIcon className="text-orange-500" fontSize="small" />,
      name: "MERN",
    },
    {
      icon: <TerminalIcon className="text-blue-600" fontSize="small" />,
      name: "Material UI",
    },
    {
      icon: <PeopleAltIcon className="text-green-500" fontSize="small" />,
      name: "Collaborate",
    },
  ];

  return (
    <div id="header-tags">
      {tags.map((tag, index) => (
        <button
          key={index}
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-100 
                  hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-1 mb-2
                    dark:bg-gray-800 dark:text-gray-200
                    dark:border-gray-800 
                    dark:hover:bg-gray-700 dark:hover:border-gray-700"
        >
          {tag.icon}
          {tag.name}
        </button>
      ))} 
    </div>
  );
};

export default HeaderTags;
