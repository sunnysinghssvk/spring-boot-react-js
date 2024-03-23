import React from "react";

const Footer = () => {
    return (
        <div class="my-2"
            style={{bottom: 0, display: "block", width: "100%"}}>
            <footer class="text-center text-lg-start text-white bg-secondary">
                <div
                    class="text-center p-3 bg-secondary">
                    © 2020 Copyright:
                    <a class="text-white" href="http://localhost:3000"
                    >http://localhost:3000"</a
                    >
                </div>
            </footer>
        </div>
    );
};

export default Footer;