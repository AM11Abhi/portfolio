import { InView } from "@/components/core/in-view";

// TODO: Once you add your WebP images to src/assets/gallery/, uncomment the imports below:
// import photo1 from "@/assets/gallery/photo-1.webp";
// import photo2 from "@/assets/gallery/photo-2.webp";
// import photo3 from "@/assets/gallery/photo-3.webp";
// import photo4 from "@/assets/gallery/photo-4.webp";
// import photo5 from "@/assets/gallery/photo-5.webp";
// import photo6 from "@/assets/gallery/photo-6.webp";
// import photo7 from "@/assets/gallery/photo-7.webp";
// import photo8 from "@/assets/gallery/photo-8.webp";
// import photo9 from "@/assets/gallery/photo-9.webp";
// import photo10 from "@/assets/gallery/photo-10.webp";
// import photo11 from "@/assets/gallery/photo-11.webp";
// import photo12 from "@/assets/gallery/photo-12.webp";
// import photo13 from "@/assets/gallery/photo-13.webp";
// import photo14 from "@/assets/gallery/photo-14.webp";
// import photo15 from "@/assets/gallery/photo-15.webp";

interface GalleryImage {
  id: number;
  src: string | null;
  aspectRatio: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: null, aspectRatio: "aspect-[3/4]" }, // Portrait (1.33)
  { id: 2, src: null, aspectRatio: "aspect-[4/3]" }, // Landscape (0.75)
  { id: 3, src: null, aspectRatio: "aspect-[1/1]" }, // Square (1.00)
  { id: 4, src: null, aspectRatio: "aspect-[9/16]" }, // Tall Portrait (1.78)
  { id: 5, src: null, aspectRatio: "aspect-[16/9]" }, // Wide Landscape (0.56)
  { id: 6, src: null, aspectRatio: "aspect-[16/9]" }, // Wide Landscape (0.56)
  { id: 7, src: null, aspectRatio: "aspect-[3/4]" }, // Portrait (1.33)
  { id: 8, src: null, aspectRatio: "aspect-[1/1]" }, // Square (1.00)
  { id: 9, src: null, aspectRatio: "aspect-[9/16]" }, // Tall Portrait (1.78)
  { id: 10, src: null, aspectRatio: "aspect-[4/3]" }, // Landscape (0.75)
  { id: 11, src: null, aspectRatio: "aspect-[9/16]" }, // Tall Portrait (1.78)
  { id: 12, src: null, aspectRatio: "aspect-[16/9]" }, // Wide Landscape (0.56)
  { id: 13, src: null, aspectRatio: "aspect-[4/3]" }, // Landscape (0.75)
  { id: 14, src: null, aspectRatio: "aspect-[1/1]" }, // Square (1.00)
  { id: 15, src: null, aspectRatio: "aspect-[3/4]" }, // Portrait (1.33)
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-border px-6 py-28 md:px-16 md:py-40 bg-[#F8F5EE] dark:bg-secondary/10"
    >
      <div className="mx-auto max-w-[1300px]">
        <header className="mb-16 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            06 — Beyond the Screen
          </p>
          <h2 className="text-display text-4xl text-foreground md:text-5xl mb-4">
            Beyond the Screen
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A few moments beyond code.
          </p>
        </header>

        <div className="columns-2 lg:columns-3 gap-8 [column-fill:_balance] box-border">
          {galleryImages.map((image, idx) => (
            <div key={image.id} className="break-inside-avoid mb-8">
              <InView
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.94, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                viewOptions={{ amount: 0.15 }}
                once={true}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-secondary/15 shadow-sm transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-md hover:border-foreground/15 cursor-pointer">
                  <div className={`${image.aspectRatio} w-full flex items-center justify-center`}>
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={`Photo ${image.id}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/35 animate-pulse flex flex-col items-center justify-center p-4">
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-mono">
                          photo-{image.id}.webp
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </InView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
