import { useRef, useState, useEffect, useTransition } from "react";
import { motion } from "motion/react";

const sampleText = `
Dear Reader,

You ask what compelled me to write The Duel, and whether I intended it as a judgment upon the men who inhabit its pages. I must answer honestly: I do not judge them. I merely observe.

Laevsky’s weakness, so often condemned, seemed to me neither exceptional nor monstrous. On the contrary, it is painfully common. He is a man who understands how he ought to live, yet lacks the strength to live in accordance with that understanding. This conflict—between knowledge and action—interested me far more than any moral resolution. Life, after all, rarely provides verdicts; it provides circumstances.

I have been reproached for allowing my characters too much ambiguity. But clarity, when forced, becomes false. A writer’s task is not to solve problems, but to state them correctly. If the reader feels uneasy at the end of the story, it is because life itself leaves us uneasy, suspended between habit and hope.

I chose a confined setting deliberately. When people are enclosed—by climate, by social obligation, by their own indecision—their inner life becomes audible. Trivial conversations acquire weight, and small actions expose entire philosophies. In such conditions, a glance or a pause can be more revealing than a confession.


With sincere respect,
Anton Chekhov
`;

const sampleTextCN = `
亲爱的读者：

你询问我为何写下《决斗》，以及我是否意在对书中人物作出评判。对此，我必须坦率地回答：我并不评判他们，我只是观察。

莱夫斯基的软弱常常受到指责，但在我看来，它既不特殊，也不怪异。恰恰相反，它过于普遍了。他明白自己应当如何生活，却缺乏按照这种理解去生活的力量。正是这种“知道”与“行动”之间的裂隙，比任何道德结论都更令我感兴趣。生活并不提供裁决，它只提供处境。

有人责备我让人物保留了过多的暧昧性。但被强行制造的清晰，往往是不真实的。作家的职责并非解决问题，而是把问题陈述得准确。如果读者在故事结束时感到不安，那是因为生活本身就使人处于不安之中——徘徊在习惯与希望之间。

我有意选择了封闭的环境。当人被限制住——被气候、社会义务，或自身的犹疑所限制时，他们的内心生活便开始显现。琐碎的谈话获得重量，细小的举动暴露出完整的世界观。在这种条件下，一个目光、一次停顿，往往比忏悔更具说明力。

如果说故事中存在某种进展，那也是极其有限的。我并不相信突如其来的道德转变。改变总是缓慢的，几乎不可察觉，且往往在巨大浪费之后才姗姗来迟。这不是悲观，而是观察所得。

倘若这篇作品让你对其意义感到犹疑，我会认为那是一种成功。确定性属于教义，而文学属于问题。

谨致敬意，
安东·契诃夫
`;

function splitTextByLanguage(text: string) {
  // Check if text contains CJK characters
  const hasCJK = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/.test(text);
  return hasCJK ? text.split("") : text.split(/(\s+)/);
}

export default function FoldingLetter() {
  const measurerRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const pageHeight = 160; // h-40

  useEffect(() => {
    startTransition(() => {
      if (!measurerRef.current) return;
      const measurer = measurerRef.current;
      const tempPages: string[] = [];
      const units = splitTextByLanguage(sampleText);

      let currentPage = "";
      // maybe switch to binary search
      for (const unit of units) {
        const testContent = currentPage + unit;
        measurer.textContent = testContent;
        if (measurer.scrollHeight > pageHeight && currentPage.trim()) {
          tempPages.push(currentPage);
          currentPage = unit;
          measurer.textContent = currentPage;
        } else {
          currentPage = testContent;
        }
      }

      if (currentPage.trim()) {
        tempPages.push(currentPage);
      }
      setPages(tempPages);
    });
  }, []);

  return (
    <div className="w-120">
      {/* Hidden measurer */}
      {pages.length === 0 && (
        <div
          ref={measurerRef}
          className="fixed top-0 -left-100 p-4 h-40 w-120 whitespace-pre-wrap text-xs"
          aria-hidden="true"
        />
      )}
      {/* Render pages */}
      <motion.div
        className="relative w-120"
        onClick={() => setIsExpanded((prev) => !prev)}
        animate={{
          rotateZ: isExpanded ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 44,
        }}
      >
        {pages.slice(0, 3).map((content, index) => {
          // const totalPages = pages.length;
          // const top = index === 1 ? 160 : isExpanded ? 160 * index : 0;
          const top = isExpanded
            ? 160 * (index - 1) + 160 // Page 0: -160, Page 1: 0, Page 2: 160
            : 0 + 160; // All pages at center when folded
          const initialRotateX = index === 1 ? 180 : 0;
          return (
            <motion.div
              key={`${content.slice(0, 10)}-${index}`}
              className="absolute left-0 h-40 w-120 bg-gray-200 p-4 overflow-hidden whitespace-pre-wrap text-xs backface-hidden"
              initial={{ top: top, left: 0, rotateX: initialRotateX }}
              animate={{
                top: top,
                rotateX: isExpanded ? 0 : index === 1 ? -180 : 0,
                zIndex: 2 - index,
              }}
              transition={{
                // duration: 1.0,
                // ease: index === 1 ? "linear" : "easeInOut",
                type: "spring",
                stiffness: index === 1 ? 46 : 50,
                // damping: 20,
                // mass: 1,
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                height: index === 2 ? 180 : 160,
              }}
            >
              {content}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// const PageSegment = () => {
// return <div className="h-40 w-90 bg-gray-400"></div>;
// };
