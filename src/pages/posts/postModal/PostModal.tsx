import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { PostForm } from "../postForm";
import { Button } from "components";
import "./PostModal.css";

export function PostModal() {
  return (
    <>
      <Popup
        trigger={
          <div>
            <Button>Nova postagem</Button>
          </div>
        }
        modal
      >
        <div>
          <PostForm />
        </div>
      </Popup>
    </>
  );
}
