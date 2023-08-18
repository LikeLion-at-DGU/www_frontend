import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@font-face {
		font-family: 'Pretendard-Regular';
		src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
        font-family: 'Roboto Mono', monospace;
        font-family: 'Pretendard-Regular';
		/* font-family: ${({ isKorean }) =>
      isKorean ? "Pretendard-Regular" : "'Roboto Mono', monospace"}; */
		
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
        font-family: 'Roboto Mono', monospace;
	}
	*{
    font-family: 'Roboto Mono', monospace;
		box-sizing: border-box;
	}
	body {
		/* background-image : url("./image/mainbg.png");
		background-size: cover; */
		background-color: #F2F2F2; 
		color: #222222;
		/* nav바 높이만큼 내림 */
		margin-top: 97px;
		@media all and (max-width: 460px) {
			margin: 0;
		}
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: #222222;
	}
`;
