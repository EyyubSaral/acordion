"use client";
import "./accordionStyle.css";
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleClick(0)}>
          Ürün kaliteli mi?
        </h2>
        {activeIndex === 0 && (
          <p className="accordion-content">
            Kaliteli mi? Eh, kendisi tam olarak bir Antik Mısır eseri kadar eski
            görünmüyor ama kalite konusunda uzaktan akraba olabilirler. Yine de
            iş görür... belki.
          </p>
        )}
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleClick(1)}>
          Fiyatı ne kadar?
        </h2>
        {activeIndex === 1 && (
          <p className="accordion-content">
            Fiyat? Şaka yapmıyorsunuz, değil mi? Hani, cüzdanınıza bakıp "Bu aşk
            bizi iflasa sürükler" dedirtecek cinsten. Ama unutmayın, pahalı her
            zaman iyidir demek değildir... Genelde değildir.
          </p>
        )}
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleClick(2)}>
          Ne Zaman Ulaşılır
        </h2>
        {activeIndex === 2 && (
          <p className="accordion-content">
            Teslimat süremiz? Hmm... Belki bu siparişi veren kişi bir sonraki
            nesil siz olabilirsiniz! Ama sabırlı olun, bir gün mutlaka gelir…
            belki.
          </p>
        )}
      </div>
    </div>
  );
}
