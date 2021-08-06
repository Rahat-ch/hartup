import { supabase } from './supabaseclient';

export const addAcheivement = async ({
  description,
  isallowedontimeline,
  impact,
  challenges,
  refresh,
  closeModal,
  setCurrentId,
}) => {
  const user = supabase.auth.user();
  const { data, error } = await supabase.from(`achievements`).insert([
    {
      description,
      isallowedontimeline,
      impact,
      challenges,
      user_id: user?.id,
    },
  ]);
  if (error) {
    console.error(error);
  }
  if (data) {
    console.log({ data });
    refresh();
    closeModal();
    setCurrentId(data[0].id);
  }
  return data;
};

export const getAcheivements = async (setState) => {
  const { data, error } = await supabase.from(`achievements`).select();
  if (error) {
    console.log(error);
    return error;
  }
  if (setState) {
    setState(data);
  }
  return data;
};

export const upDateAcheivements = async ({
  id,
  refresh,
  updateKey,
  updateValue,
}) => {
  const { data, error } = await supabase
    .from(`achievements`)
    .update({ [updateKey]: updateValue })
    .match({ id });
  if (error) {
    console.log(error);
    return error;
  }
  if (data) {
    console.log(data);
    refresh();
    return data;
  }
  return data || null;
};
