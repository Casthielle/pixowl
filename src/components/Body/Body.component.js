import Article from '../Article/Article.vue';

export default {
  name: 'Body',
  props: {
    msg: String,
  },
  data: () => {
    return {
      strings: ['CREATE.', 'ANIMATE.', 'PLAY.'],
      first: {
        title: 'POWERFUL EASY TO USE MODELING TOOLS',
        description: `Make the most of your creativity
        with a robust set of tools. If you are an
        advanced 3D modeler or just starting out, 
        with our super user-frendly interface you will 
        creating amazing stuff right away`,
        features: [
          'All in one software with incredible performance',
          'Windows and Mac supported',
          'Amazing voxel creation tools',
          'Emisive Wand. Make you work glow',
          'Increase your voxel to get that level of detail',
          'Work with a big canvas',
          'Mirror XYZ. Work less, we take care of the rest',
          'Voxel, Quads and super fast Render view',
          'Advanced color paletter',
          'Super friendly 3D enviroment to work',
          'And much more',
        ],
      },
      second: {
        title: 'ANIMATE YOUR CREATIONS',
        description: `A game changer in the voxel word. 
        With our own Skeletor System, VoxEditor allows you 
        to rig and animate anything that you want using 
        the timeline with a super easy to use keyframing mode.`,
        features: [
          'Animation! Bring your creation to life',
          'Skeleton System',
          'Cut & Rig',
          'Powerful Timeline',
          'Keyframing interpolation',
          'Curves',
          'Animations integrated in one file',
        ],
      },
    };
  },
  components: {
    Article,
  },
};
