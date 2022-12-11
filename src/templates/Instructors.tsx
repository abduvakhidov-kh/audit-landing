import { Section } from '../layout/Section';

const Instructors = () => {
  return (
    <figure className="p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
      <Section>
        <img
          className="w-24 h-24 mx-auto rounded-full"
          src="/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Наши учителя имеют большой опыт преподавании и работы в
              аудиторскуой и бухгалтерской сфере”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </Section>
    </figure>
  );
};

export { Instructors };
