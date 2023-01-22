import React from "react";
import { linkType } from "../../types";
import useStore from "./../../store/store";
import ShareLink from "./ShareLink";

const LinksContainer = (props: any) => {
  const { links } = props;

  return (
    <div className="">
      {links?.map((link: linkType) => {
        return (
          <div className="my-2" key={link.id}>
            <ShareLink {...link} />
          </div>
        );
      })}
    </div>
  );
};

export default LinksContainer;
