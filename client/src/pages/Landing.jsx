import { useState } from "react";
import { RiGroup2Fill } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GiJoint } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { BsFillChatRightDotsFill, BsShareFill } from "react-icons/bs";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function Landing() {
  const [text, setText] = useState("");
  return (
    <div className="h-fit flex flex-col mt-10 md:items-center lg:mt-10">
      <section>
        <header className="text-center">
          <div className="text-5xl ">Hi!</div>
          <div className="text-2xl">Welcome to mernChatApp</div>
        </header>
        <main>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center text-9xl"
          >
            <RiGroup2Fill />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="font-mono text-center text-lg md:w-3/6 mx-auto">
              mernChatApp is a room based messaging platform that enables people
              to connect and exchange on various aspects of their daily lives
            </h1>
          </motion.div>
        </main>
      </section>
      <div>{text}</div>
      <input
        type="text"
        className="border outline-none border-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Picker
        data={data}
        onEmojiSelect={(emoji) => setText(text + emoji.native)}
        maxFrequentRows={0}
        searchPosition="none"
        theme="dark"
        previewPosition="none"
        icons="solid"
        emojiSize="20"
        perLine="6"
        rows={4}
      />
    </div>
  );
}
