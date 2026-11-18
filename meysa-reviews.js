
/* MEYSA Reviews V9 - GitHub Pages - Ticimax */
(function () {
  "use strict";

  if (window.MeysaReviewsV9) return;
  window.MeysaReviewsV9 = true;

  var BASE = "https://dpu-ai.github.io/meysa-reviews/";

  var FILES = {
    "/limited-kase-kaban-aci-kahve":
      "data/limited-kase-kaban-aci-kahve.json"
  };

  var path = decodeURIComponent(location.pathname)
    .replace(/\/+$/, "")
    .toLocaleLowerCase("tr-TR");

  if (!Object.prototype.hasOwnProperty.call(FILES, path)) {
    return;
  }

  var reviews = [];
  var scheduled = false;

  var css = `
#meysa-reviews-v8 {
  font-family: inherit;
  color: #191919;
  background: #fff;
  padding: 20px 0;
  box-sizing: border-box;
}
#meysa-reviews-v8 * {
  box-sizing: border-box;
}
#meysa-reviews-v8 h2 {
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 15px;
}
#meysa-reviews-v8 .mr8-insight {
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 19px;
  margin-bottom: 23px;
  background: #fafafa;
}
#meysa-reviews-v8 .mr8-insight h3 {
  margin: 0 0 9px;
  font-size: 17px;
}
#meysa-reviews-v8 .mr8-insight p {
  margin: 0;
  color: #444;
  font-size: 13px;
  line-height: 1.8;
}
#meysa-reviews-v8 .mr8-summary {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
#meysa-reviews-v8 .mr8-avg {
  font-size: 31px;
  font-weight: 700;
}
#meysa-reviews-v8 .mr8-stars {
  position: relative;
  display: inline-block;
  color: #ddd;
  font-size: 21px;
  letter-spacing: 2px;
  line-height: 1;
  white-space: nowrap;
}
#meysa-reviews-v8 .mr8-stars-on {
  position: absolute;
  left: 0;
  top: 0;
  color: #f5a400;
  white-space: nowrap;
  overflow: hidden;
}
#meysa-reviews-v8 .mr8-sub {
  font-size: 12px;
  color: #777;
  margin: 10px 0 18px;
}
#meysa-reviews-v8 .mr8-bars {
  max-width: 490px;
  margin-bottom: 24px;
}
#meysa-reviews-v8 .mr8-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 12px;
}
#meysa-reviews-v8 .mr8-label {
  width: 32px;
  flex-shrink: 0;
}
#meysa-reviews-v8 .mr8-track {
  height: 8px;
  flex: 1;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
}
#meysa-reviews-v8 .mr8-fill {
  display: block;
  height: 100%;
  background: #f5a400;
}
#meysa-reviews-v8 .mr8-count {
  width: 30px;
  text-align: right;
}
#meysa-reviews-v8 h3 {
  font-size: 17px;
  font-weight: 700;
  margin: 22px 0 14px;
}
#meysa-reviews-v8 .mr8-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}
#meysa-reviews-v8 .mr8-search,
#meysa-reviews-v8 .mr8-sort {
  height: 44px !important;
  border: 1px solid #ddd !important;
  border-radius: 7px !important;
  background: #fff !important;
  color: #222 !important;
  font: inherit !important;
  font-size: 13px !important;
  padding: 0 12px !important;
}
#meysa-reviews-v8 .mr8-search {
  flex: 1;
  min-width: 0;
}
#meysa-reviews-v8 .mr8-sort {
  width: 185px;
}
#meysa-reviews-v8 .mr8-item {
  padding: 16px 0 !important;
  border-bottom: 1px solid #eee;
  height: auto !important;
  overflow: visible !important;
  display: block !important;
}
#meysa-reviews-v8 .mr8-top {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 9px 0;
}
#meysa-reviews-v8 .mr8-name {
  font-size: 13px;
  font-weight: 700;
}
#meysa-reviews-v8 .mr8-source {
  font-size: 11px;
  color: #777;
}
#meysa-reviews-v8 .mr8-date {
  font-size: 11px;
  color: #888;
  margin-left: auto;
}
#meysa-reviews-v8 .mr8-text {
  display: block !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  line-height: 1.8 !important;
  color: #333 !important;
  margin: 7px 0 0 !important;
  height: auto !important;
  max-height: none !important;
  visibility: visible !important;
  opacity: 1 !important;
  overflow: visible !important;
  white-space: normal !important;
}
#meysa-reviews-v8 .mr8-more {
  width: 100%;
  margin: 15px 0 0;
  padding: 13px;
  border: 1px solid #222;
  border-radius: 6px;
  background: #fff;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
#meysa-reviews-v8 .mr8-native {
  border-top: 1px solid #eee;
  margin-top: 25px;
  padding-top: 18px;
}
#meysa-reviews-v8 .mr8-native p {
  font-size: 12px;
  color: #777;
  line-height: 1.6;
}
@media(max-width:767px) {
  #meysa-reviews-v8 {
    padding: 16px 0;
  }
  #meysa-reviews-v8 h2 {
    font-size: 19px;
  }
  #meysa-reviews-v8 .mr8-controls {
    flex-direction: column;
  }
  #meysa-reviews-v8 .mr8-search,
  #meysa-reviews-v8 .mr8-sort {
    width: 100%;
    flex: none;
  }
}
`;

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt !== undefined) n.textContent = txt;
    return n;
  }

  function star(value) {
    var n = el("span", "mr8-stars", "★★★★★");
    n.setAttribute(
      "aria-label",
      Number(value).toFixed(2).replace(".", ",") + " / 5"
    );

    var fill = el("span", "mr8-stars-on", "★★★★★");
    fill.style.width =
      Math.max(0, Math.min(100, Number(value) * 20)) + "%";

    n.appendChild(fill);
    return n;
  }

  function parseDate(r) {
    if (!r.date || !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) {
      return null;
    }

    var d = new Date(r.date + "T12:00:00");
    return Number.isNaN(d.getTime()) ? null : d.getTime();
  }

  function dateLabel(r) {
    var time = parseDate(r);
    if (time === null) return "";

    var today = new Date();
    var todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    var d = new Date(time);
    var reviewDay = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate()
    );

    var diff = Math.max(
      0,
      Math.round((todayMidnight - reviewDay) / 86400000)
    );

    if (diff === 0) return "Bugün";
    if (diff === 1) return "Dün";
    if (diff < 7) return diff + " gün önce";
    if (diff < 14) return "1 hafta önce";
    if (diff < 30) {
      return Math.floor(diff / 7) + " hafta önce";
    }

    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function stats() {
    var counts = { 1:0, 2:0, 3:0, 4:0, 5:0 };
    var sum = 0;

    reviews.forEach(function(r) {
      counts[r.rating]++;
      sum += r.rating;
    });

    return {
      counts: counts,
      count: reviews.length,
      average: reviews.length ? sum / reviews.length : 0
    };
  }

  function insights() {
    var themes = [
      {
        name: "kumaş kalitesi",
        re: /kumaş|doku|kaşe|astar/i
      },
      {
        name: "kalıp ve duruş",
        re: /kalıp|kesim|duruş|beden|omuz/i
      },
      {
        name: "sıcak tutma",
        re: /sıcak|soğuk|rüzgar|kış/i
      },
      {
        name: "teslimat ve paketleme",
        re: /kargo|teslim|paket/i
      }
    ];

    var positive = reviews.filter(function(r) {
      return r.rating >= 4;
    });

    var negative = reviews.filter(function(r) {
      return r.rating <= 3;
    });

    var popular = themes.map(function(t) {
      return {
        name: t.name,
        count: positive.filter(function(r) {
          return t.re.test(r.text);
        }).length
      };
    }).sort(function(a,b) {
      return b.count - a.count;
    });

    var issues = [];

    if (negative.some(function(r) {
      return /kargo|teslim|gecik|paket/i.test(r.text);
    })) {
      issues.push("teslimat ve paketleme");
    }

    if (negative.some(function(r) {
      return /düğme|dikiş|astar/i.test(r.text);
    })) {
      issues.push("dikiş ve düğme detayları");
    }

    if (negative.some(function(r) {
      return /iade|iptal|stok/i.test(r.text);
    })) {
      issues.push("iade ve stok süreçleri");
    }

    var txt =
      "Değerlendirmelerde en sık öne çıkan olumlu konular " +
      popular.slice(0,3).map(function(x) {
        return x.name;
      }).join(", ") + ".";

    if (issues.length) {
      txt +=
        " Bazı müşteriler " +
        issues.join(", ") +
        " konusunda olumsuz deneyimler bildirmiş.";
    }

    return txt;
  }

  function build() {
    var root = el("section");
    root.id = "meysa-reviews-v8";

    root.appendChild(
      el("h2", "", "Müşteri Yorumları")
    );

    var insight = el("div", "mr8-insight");

    insight.appendChild(
      el("h3", "", "Müşteriler Ne Diyor?")
    );

    insight.appendChild(
      el("p", "", insights())
    );

    root.appendChild(insight);

    var s = stats();
    var summary = el("div", "mr8-summary");

    summary.appendChild(
      el(
        "strong",
        "mr8-avg",
        s.average.toFixed(2).replace(".", ",")
      )
    );

    summary.appendChild(star(s.average));
    root.appendChild(summary);

    root.appendChild(
      el(
        "p",
        "mr8-sub",
        s.count + " müşteri değerlendirmesi"
      )
    );

    var bars = el("div", "mr8-bars");

    [5,4,3,2,1].forEach(function(n) {
      var row = el("div", "mr8-bar");

      row.appendChild(
        el("span", "mr8-label", n + " ★")
      );

      var track = el("span", "mr8-track");
      var fill = el("span", "mr8-fill");

      fill.style.width =
        (s.count ? s.counts[n] / s.count * 100 : 0) + "%";

      track.appendChild(fill);
      row.appendChild(track);

      row.appendChild(
        el("span", "mr8-count", String(s.counts[n]))
      );

      bars.appendChild(row);
    });

    root.appendChild(bars);

    root.appendChild(
      el("h3", "", "Müşteri Değerlendirmeleri")
    );

    var controls = el("div", "mr8-controls");
    var input = el("input", "mr8-search");

    input.type = "search";
    input.placeholder = "Yorumlarda ara";
    input.setAttribute("aria-label", "Yorumlarda ara");

    controls.appendChild(input);

    var sort = el("select", "mr8-sort");

    [
      ["new", "En Yeni Yorumlar"],
      ["old", "En Eski Yorumlar"],
      ["high", "En Yüksek Puan"],
      ["low", "En Düşük Puan"]
    ].forEach(function(pair) {
      var option = el("option", "", pair[1]);
      option.value = pair[0];
      sort.appendChild(option);
    });

    controls.appendChild(sort);
    root.appendChild(controls);

    var list = el("div", "mr8-list");
    root.appendChild(list);

    var more = el(
      "button",
      "mr8-more",
      "Daha fazla yorum göster"
    );

    more.type = "button";
    root.appendChild(more);

    var native = el("div", "mr8-native");

    native.appendChild(
      el("h3", "", "Ticimax Müşteri Yorumları")
    );

    native.appendChild(
      el(
        "p",
        "",
        "Ticimax üzerinden gönderilen değerlendirmeler ve Yorum Yap alanı aşağıdadır."
      )
    );

    root.appendChild(native);

    var limit = 5;

    function draw() {
      var q = input.value.trim()
        .toLocaleLowerCase("tr-TR");

      var filtered = reviews.filter(function(r) {
        return (r.name + " " + r.text)
          .toLocaleLowerCase("tr-TR")
          .indexOf(q) !== -1;
      }).slice();

      filtered.sort(function(a,b) {
        if (sort.value === "high") {
          return b.rating - a.rating ||
            a._index - b._index;
        }

        if (sort.value === "low") {
          return a.rating - b.rating ||
            a._index - b._index;
        }

        var ad = parseDate(a);
        var bd = parseDate(b);

        if (ad === null && bd === null) {
          return a._index - b._index;
        }

        if (ad === null) return 1;
        if (bd === null) return -1;

        return (
          sort.value === "old" ? ad - bd : bd - ad
        ) || a._index - b._index;
      });

      list.replaceChildren();

      filtered.slice(0,limit).forEach(function(r) {
        var item = el("article", "mr8-item");

        item.appendChild(star(r.rating));

        var top = el("div", "mr8-top");

        top.appendChild(
          el("strong", "mr8-name", r.name)
        );

        top.appendChild(
          el(
            "span",
            "mr8-source",
            "Müşteri değerlendirmesi"
          )
        );

        var date = dateLabel(r);

        if (date) {
          top.appendChild(
            el("span", "mr8-date", date)
          );
        }

        item.appendChild(top);

        item.appendChild(
          el("p", "mr8-text", r.text)
        );

        list.appendChild(item);
      });

      if (!filtered.length) {
        list.appendChild(
          el(
            "p",
            "mr8-text",
            "Eşleşen yorum bulunamadı."
          )
        );
      }

      more.style.display =
        filtered.length > limit ? "block" : "none";

      more.textContent =
        "Daha fazla yorum göster (" +
        Math.max(0, filtered.length - limit) +
        " kaldı)";
    }

    input.addEventListener("input", function() {
      limit = 5;
      draw();
    });

    sort.addEventListener("change", function() {
      limit = 5;
      draw();
    });

    more.addEventListener("click", function() {
      limit += 10;
      draw();
    });

    draw();
    return root;
  }

  function updateCounter() {
    var counter =
      document.getElementById("divYorumSayisi");

    if (!counter) return;

    var original = counter.getAttribute(
      "data-meysa-native-count"
    );

    if (original === null) {
      var m = (counter.textContent || "").match(/\d+/);
      original = m ? m[0] : "0";

      counter.setAttribute(
        "data-meysa-native-count",
        original
      );
    }

    var target =
      "(" + (Number(original) + reviews.length) + ")";

    if (counter.textContent !== target) {
      counter.textContent = target;
    }
  }

  function install() {
    if (!reviews.length) return;

    var panel = document.querySelector(
      "#divTabYorumlar .tabYorumlar"
    );

    if (!panel) return;

    var existing = document.getElementById(
      "meysa-reviews-v8"
    );

    if (!existing || existing.parentNode !== panel) {
      if (existing) existing.remove();

      panel.insertBefore(
        build(),
        panel.firstChild
      );
    }

    updateCounter();
  }

  function schedule() {
    if (scheduled) return;

    scheduled = true;

    setTimeout(function() {
      scheduled = false;
      install();
    }, 180);
  }

  function start() {
    var style = el("style");
    style.id = "meysa-reviews-v9-css";
    style.textContent = css;

    document.head.appendChild(style);

    fetch(BASE + FILES[path], {
      cache: "no-cache"
    })
    .then(function(res) {
      if (!res.ok) {
        throw Error("HTTP " + res.status);
      }

      return res.json();
    })
    .then(function(data) {
      if (!Array.isArray(data)) {
        throw Error("Geçersiz yorum verisi");
      }

      var seen = new Set();

      reviews = data.filter(function(r) {
        return r &&
          typeof r.text === "string" &&
          typeof r.name === "string" &&
          Number.isInteger(Number(r.rating)) &&
          Number(r.rating) >= 1 &&
          Number(r.rating) <= 5;
      })
      .filter(function(r) {
        var key =
          r.name.trim().toLocaleLowerCase("tr-TR") +
          "|" +
          r.text.trim().toLocaleLowerCase("tr-TR");

        if (seen.has(key)) return false;

        seen.add(key);
        return true;
      })
      .map(function(r, i) {
        return {
          name: r.name,
          text: r.text,
          rating: Number(r.rating),
          date: r.date || null,
          _index: i
        };
      });

      install();

      new MutationObserver(schedule).observe(
        document.body,
        {
          childList: true,
          subtree: true
        }
      );
    })
    .catch(function(e) {
      console.error("MEYSA Reviews V9:", e);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      start,
      { once: true }
    );
  } else {
    start();
  }
})();
