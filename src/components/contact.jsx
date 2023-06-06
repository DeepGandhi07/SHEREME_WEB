import React, { useEffect } from "react";
const ex = () => {
  setTimeout(function () {
    if (document.getElementById("ngoContentContainer").innerHTML.length < 40) {
      document.getElementById("ngoContentContainer").innerHTML =
        "<center> <p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";
    }
  }, 20000);
};
const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://test.danamojo.org/dm/js/widget.js&quot;";
    script.type = "text/javascript";

    document.body.appendChild(script);
    // ex();
    return () => {
      // clean up the script when the component in unmounted

      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="dmScriptContainer" style="display:none;">
        <a href="#">Donate Now</a>
      </div>

      <div
        id="ngoContentContainer"
        iNGOId="12"
        oDisplay="button"
        iCustomButtonImage="no"
      ></div>
    </div>
  );
};

export default Contact;
