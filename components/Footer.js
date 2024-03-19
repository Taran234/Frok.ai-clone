import FastMarquee from "react-fast-marquee";
import { Children } from "react";
export default function Footer() {
  return (
    <footer>
      <nav>
        <a href="https://docs.frok.ai/introduction/readme" rel="noopener noreferrer" target="_blank" className="nav-link">Documentation<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2.3rem" fill="currentColor" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></a>
        <a href="https://docs.frok.ai/introduction/readme" rel="noopener noreferrer" target="_blank" className="nav-link">TERMS & CONDITIONS
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2.3rem" fill="currentColor" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></a>
        <a href="https://docs.frok.ai/introduction/readme" rel="noopener noreferrer" target="_blank" className="nav-link">PRIVACY POLICY<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2.3rem" fill="currentColor" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></a>
      </nav>
      <div>
        <FastMarquee
          autoFill={{ Children: true }}
          direction="right"
          style={{
            width: '100%',
            whiteSpace: 'pre',
            overflow: 'hidden',
            color: '#fff', // Text color (red in this case)
            fontFamily: 'Arial, sans-serif', // Font family
            fontSize: '1.5rem', // Font size
            fontWeight: 'bold', // Font weight
            opacity: 0.55,
          }}
        >
          @    #  .  @    #{"\("}          @      % /    #    @ .  /       #    @       @ %    /  # {"\("} {"\("}  {"\("} ,  /      .     {"\("}      {"\("} @  {"\("}    {"\("}    # ,    , {"\("} / #    {"\("}    %  # {"\("} % @    @     / #    %    , %        ,      / % ,    %    {"\("}  {"\("}  {"\("} {"\("}  , .      . @  ,    @ #  %    #            @  {"\("}  /    .    , ,    . {"\("}  # / .    {"\("}    %    #    {"\("} #   % /    &amp; *       . @  @ # {"\("}  %    #    , %   @ / / %    # / ,    .    {"\("} .  @ % {"\("} @  #  #  * {"\("} @  @ {"\("} / #  % {"\("} / @  @ / ,  % .          @ %    . %  {"\("} @  # /    ,     {"\("} % ,  @ # .  % / @  @ / %        @ {"\)"}    # * {"\("}  *    % / @      % #  @ {"\("} # / ,
        </FastMarquee>
      </div>



    </footer>
  );
}
