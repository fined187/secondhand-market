'use client';
import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

export default function EmptyState({
  title = '일치하는 상품이 없습니다.',
  subtitle= '일부 필터를 변경하거나 제거해 보십시오.',
  showReset
}: EmptyStateProps) {
  const router = useRouter();
  return (
    <>
      <div
        className='
          h-[60vh]
          flex
          flex-col
          gap-2
          justify-center
          items-center
        '
      >
        <Heading 
          title={title}
          subtitle={subtitle}
          center
        />
        <div
          className='
            w-48
            mt-4'
        >
          {
            showReset && <Button
              outline
              label= '필터 초기화'
              onClick={() => router.push('/')}
            />
          }
        </div>
      </div>
    </>
  )
}