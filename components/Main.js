

export default function Main() {
  return (
    <section className="main-container">
      <div className="big-container">
        <div className="buttons-container">
          <div className="button">
            <a href="https://kyberswap.com/swap/base/eth-to-frok" target="_blank" className="lnk">
              <div className="lnk-txt">BUY $FROK</div>
              <div className="lnk-desc">KyberSwap</div></a>
            <a href="https://kyberswap.com/swap/base/eth-to-frok" target="_blank" className="lnk">
              <div className="lnk-txt">T-4D04:02:10</div>
              <div className="lnk-desc">The Frok Times</div></a>
            <a href="https://kyberswap.com/swap/base/eth-to-frok" target="_blank" className="lnk">
              <div className="lnk-txt">Contact us</div>
              <div className="lnk-desc">Frok v2 {"\("}discord{"\)"}</div></a>
          </div>
        </div>
      </div>
      <div className="bg-text-container ">
        <p className="bg-text">
          CPU Usage: 53.97% <br />
          RAM: 15.95 / 1024 GB <br />
          System Load (avg): 1m: 0.99, 5m: 0.40, 15m: 0.40 <br />
          Disk I/O: <br />
          /dev/nvme0n1 - Read: 0.00 MB/s, Write: 657.54 MB/s, Utilisation: 23.13% <br />
          /dev/nvme0n2 - Read: 792.23 MB/s, Write: 132.18 MB/s, Utilisation: 10.00% <br />
          Network Bandwidth: Up 36424.36 Mb/s, Down 22039.04 Mb/s <br />
          Sensors: <br />
          {"\t"}- Temperature: 27.28°C <br />
          {"\t"}- Humidity: 37.82% <br />
          TPUs: <br />
          {"\t"}- TPU #1: Utilization: 87.49%, Memory Used: 57.35%, Temperature: 37.03°C <br />
          {"\t"}- TPU #2: Utilization: 87.43%, Memory Used: 35.55%, Temperature: 45.62°C <br />
          {"\t"}- TPU #3: Utilization: 85.03%, Memory Used: 40.43%, Temperature: 45.56°C <br />
          {"\t"}- TPU #4: Utilization: 100.00%, Memory Used: 63.05%, Temperature: 38.72°C <br />
          CPU: AMD EPYC 7763 64-Core | RAM: 1024GB DDR4 | TPU: Google Cloud TPU v4 | OS: Ubuntu 20.04 LTS <br />
        </p>
      </div>
    </section>
  );
}
