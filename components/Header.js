import FastMarquee from "react-fast-marquee"

export default function Header() {


  return (
    <header>
      <div className="logo-container" >
        <a className="logo" href="/">
          <span>FROK</span>
        </a>
        <FastMarquee
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
    </header>
  );
}
