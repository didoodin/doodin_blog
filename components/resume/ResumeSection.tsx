const ResumeSection = ({title_kor, title_eng, content}) => {
    return (
        <dl className="flex py-3">
          <dt className="flex flex-col uppercase font-semibold w-28">
            <span className="text-xs text-gray-500 uppercase">{title_eng}</span>
            <span className="text-textColor">{title_kor}</span>
          </dt>
          <dd className="flex-1 pr-5">{content}</dd>
        </dl>
    );
}

export default ResumeSection;