import * as React from 'react';

interface Props {
  label: string;
  content: string;
}

const ContentBox: React.FC<Props> = ({ label, content }) => (
  <div className="sm:col-span-2">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900">{content}</dd>
  </div>
);

export default ContentBox;
