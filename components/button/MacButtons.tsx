interface MacButtonsProps {
  onClose?: () => void;
}

export default function MacButtons({ onClose }: MacButtonsProps) {
  return (
    <div className="inline-flex justify-center items-center gap-2">
      <button onClick={onClose} className="w-3 h-3 bg-red rounded-full"/>
      <button onClick={onClose} className="w-3 h-3 bg-yellow rounded-full"/>
      <button onClick={onClose} className="w-3 h-3 bg-green rounded-full"/>
    </div>
  );
}

