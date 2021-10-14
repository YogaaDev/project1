import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "SpaceGrotesk";
        src: url("/fonts/SpaceGrotesk-Regular.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "SpaceGrotesk-bold";
        src: url("/fonts/SpaceGrotesk-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'SpaceGrotesk', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
        color: #fff;
    }

    a:hover {
        color: #18216d;
    }

    h1,
    h2,
    h3 {
        font-family: 'SpaceGrotesk', serif;
        color: #fff;
        font-size: 44px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 36px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 26px;
        }
    }

    h4,
    h5,
    h6 {
        font-family: 'SpaceGrotesk', serif;
        color: #fff;
        font-size: 26px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 20px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 16px;
        }
    }

    p {
        color: #fff;
        font-size: 24px;        
        line-height: 1.6;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #fff;

        :hover {
            color: #fff;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
